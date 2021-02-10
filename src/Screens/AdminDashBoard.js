import React, { Component } from 'react';
import AdminNavbar from "../ScreenSnippets/admin_dash_board/AdminNavbar";
import AdminSideMenu from "../ScreenSnippets/admin_dash_board/AdminSideMenu";
import AdminContent from "../ScreenSnippets/admin_dash_board/AdminContent";
import AdminFooter from "../ScreenSnippets/admin_dash_board/AdminFooter";

class AdminDashBoard extends Component {
    render() {
        return (
            <div class="wrapper">
                <AdminNavbar />
                <AdminSideMenu />
                <AdminContent />
                <AdminFooter />
            </div>
        )
    }
}

export default AdminDashBoard;