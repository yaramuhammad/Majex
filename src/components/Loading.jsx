import { RotatingLines } from 'react-loader-spinner';

function Loading() {
    return (
        <div className="flex justify-center items-center mt-10 w-full min-h-96 pt-36">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                strokeColor="#A11D20"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    )
}
export default Loading