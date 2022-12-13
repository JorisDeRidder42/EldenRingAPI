import { CirclesWithBar } from "react-loader-spinner";

const ContentLoader = () => {
    return(
        <div className="loader">
            <CirclesWithBar
                height={100}
                width={100}
                color="#346F31"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#0d6efd"
                strokeWidth={3}
                strokeWidthSecondary={3}
            />
        </div>
    );
}
export default ContentLoader;