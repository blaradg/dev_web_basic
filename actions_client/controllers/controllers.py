# -*- coding: utf-8 -*-
# from odoo import http


# class ActionsClient(http.Controller):
#     @http.route('/actions_client/actions_client', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/actions_client/actions_client/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('actions_client.listing', {
#             'root': '/actions_client/actions_client',
#             'objects': http.request.env['actions_client.actions_client'].search([]),
#         })

#     @http.route('/actions_client/actions_client/objects/<model("actions_client.actions_client"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('actions_client.object', {
#             'object': obj
#         })
