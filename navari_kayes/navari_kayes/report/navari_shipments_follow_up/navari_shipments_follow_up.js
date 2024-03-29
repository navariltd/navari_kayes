// Copyright (c) 2023, Navari Limited and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Navari Shipments Follow Up"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"width": "100px",
			"reqd": 1
		},
		{
			"fieldname":"from_date",
			"label": __("Start Date"),
			"fieldtype": "Date",
			"default": frappe.defaults.get_user_default("year_start_date"),
			"reqd": 1,
			"width": "100px"
		},
		{
			"fieldname":"to_date",
			"label": __("End Date"),
			"fieldtype": "Date",
			"default": frappe.defaults.get_user_default("year_end_date"),
			"reqd": 1,
			"width": "100px"
		},
		{
			"fieldname":"purchase_order",
			"label": __("Purchase Order"),
			"fieldtype": "Link",
			"options": "Purchase Order",
			"reqd": 0,
			"width": "100px"
		},
		{
			"fieldname":"supplier",
			"label": __("Supplier"),
			"fieldtype": "Link",
			"options": "Supplier",
			"reqd": 0,
			"width": "100px"
		},
		{
			"fieldname":"customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options": "Customer",
			"reqd": 0,
			"width": "100px"
		},
		{
			"fieldname":"cost_center",
			"label": __("Cost Center"),
			"fieldtype": "Link",
			"options": "Cost Center",
			"reqd": 0,
			"width": "100px"
		},
	]
};
