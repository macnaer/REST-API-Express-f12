import React from "react";
import { ApiStoreServiceConsumer } from "../Api-service-context/Api-service-context";

const WithApiService = () => (Wrapped) => {
    return (props) => {
        return(
            <ApiStoreServiceConsumer>
                { 
                    (ApiService) => {
                        return <Wrapped {...props} ApiService={ApiService} />
                    }
                }
            </ApiStoreServiceConsumer>
        )
    }
}

export { WithApiService }