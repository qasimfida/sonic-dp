import { useGetTodosQuery } from "@/apis/todos";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const Layout = () => {
	const state = useSelector((state) => state.app);
	const { data, error, isLoading } = useGetTodosQuery();
	const {i18n} = useTranslation();

	return (
		<div className="flex min-h-screen bg-grey-dark">
			{/* <Sidebar/> */}
			<Outlet/>
		</div>
	);
};

export default Layout;
