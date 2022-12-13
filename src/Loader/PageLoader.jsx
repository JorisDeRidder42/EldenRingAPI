import { Oval } from "react-loader-spinner";

const PageLoader = () => {
    return(
        <div className="loader">
            <Oval
                height={100}
                width={100}
                color="#0a58ca"
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
export default PageLoader;