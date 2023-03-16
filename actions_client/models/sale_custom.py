# -*- coding: utf-8 -*-

from odoo import models, fields, api


class SaleCustom(models.Model):
    _name = 'sale.custom'
    _description = 'Sale custom'

    @api.model
    def get_sale_order(self):
        ret_list = []
        query = (
            "SELECT so.name, rp.name AS customer, so.amount_total, so.state "
            "FROM sale_order AS so "
            "JOIN res_partner AS rp ON rp.id = so.partner_id "
        )
        self.env.cr.execute(query)
        for rec in self.env.cr.dictfetchall():
            ret_list.append(rec)
        return ret_list
