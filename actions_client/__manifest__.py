# -*- coding: utf-8 -*-
{
    'name': 'Test Actions Client',
    'summary': '''
        Ejemplos de acciones de cliente
    ''',
    'description': '''
        - Sale Custom
    ''',
    'author': 'Bernardo D. Lara <bloodo.dev.solutions@gmail.com>',
    'website': '',
    'license': 'LGPL-3',
    'category': 'Test',
    'version': '15.0.0.0.1',
    'depends': ['sale', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'data/ir_actions_client_data.xml',
        'views/sale_custom_action.xml',
        # 'views/templates.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'actions_client/static/src/js/sale_action_client.js',
        ],
        'web.assets_qweb': [
            'actions_client/static/src/xml/**/*',
        ]
    }
}
