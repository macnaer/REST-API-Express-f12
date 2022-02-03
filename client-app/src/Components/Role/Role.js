import React from "react";
import { WithApiService } from "../Hoc/With-api-service";


const Role = () => {
    return (
        <>
            <h2>Role</h2>
            <table className="table align-middle table-hover">
                <thead>
                    <tr>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ADMMIN</td>
                        <td><button
                            type="button"
                            className="btn btn-primary m-2"
                            onClick={() => { }}
                        >
                            All Users in role
                        </button></td>
                    </tr>
                    <tr>
                        <td>USER</td>
                        <td><button
                            type="button"
                            className="btn btn-primary m-2"
                            onClick={() => { }}
                        >
                            All Users in role
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default WithApiService()(Role);
