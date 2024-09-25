import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RequestCard from "../../Components/Requests/RequestCard";
import Loading from "../../Components/Layout/Loading";
import { getRequests } from "../../Utils/functions/getRequests";
import TabButton from "../../Components/Layout/TabButton";
import EmptyState from "../../Components/Requests/EmptyState";

function Requests() {
  const { t } = useTranslation();
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("current");

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const res = await getRequests();
        setRequests(res);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    const filtered = requests.filter((request) =>
      tab === "current"
        ? request.status !== "delivered"
        : request.status === "delivered"
    );
    setFilteredRequests(filtered);
  }, [tab, requests]);

  return (
    <div>
      <div className="flex justify-between md:items-center items-start flex-col md:flex-row">
        <div>
          <h2 className="pt-7 font-bold text-xl md:text-2xl">
            {t("requests.requestsTitle")}
          </h2>
          <p style={{ color: "#4B4B4B" }} className="pt-2 text-base md:text-lg">
            {t("requests.requestsDescription")}
          </p>
        </div>
        <Link to="/requests/new">
          <button className="mt-6 px-8 md:px-12 py-2 md:py-3 bg-primary text-white rounded text-base md:text-lg">
            {t("requests.addNewRequestButton")}
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mt-4">
        <TabButton
          label={t("requests.current")}
          isActive={tab === "current"}
          onClick={() => setTab("current")}
        />
        <TabButton
          label={t("requests.history")}
          isActive={tab === "history"}
          onClick={() => setTab("history")}
        />
      </div>

      {loading ? (
        <Loading />
      ) : filteredRequests.length > 0 ? (
        <div className="flex flex-col mt-10">
          {filteredRequests.map((request) => (
            <RequestCard key={request._id} request={request} />
          ))}
        </div>
      ) : (
        <EmptyState t={t} />
      )}
    </div>
  );
}

export default Requests;
