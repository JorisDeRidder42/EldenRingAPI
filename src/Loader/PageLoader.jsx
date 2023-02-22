import { Oval } from "react-loader-spinner";

const PageLoader = () => {
    return(
        <div className="loader">
            <Oval
                height={100}
                width={100}
                color="#978000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#d7b700"
                strokeWidth={3}
                strokeWidthSecondary={3}
            />
        </div>
    );
}
export default PageLoader;