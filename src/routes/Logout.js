import React from "react";

import PageLogin from "../components/PageLogin";
import LogoutForm from "../components/Auth/LogoutForm";

import pageStyles from "../components/Page.module.scss";
import { useAuth } from "../contexts/Auth";

function Logout() {
    const { logout } = useAuth();

    return (
        <PageLogin className={pageStyles.Inverse} mainClassName={pageStyles.VerticalCenter}>
            <LogoutForm logout={logout} />
        </PageLogin>
    );
}

export default Logout;
