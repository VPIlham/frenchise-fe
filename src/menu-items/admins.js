// assets
import { IconBrandChrome, IconHelp, IconUsers, IconReceipt, IconBuildingStore, IconOutlet, IconBuilding } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconUsers, IconReceipt, IconBuildingStore, IconOutlet, IconBuilding };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const users = {
    id: 'admin',
    title: 'Admin',
    caption: 'Selamat datang',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/users'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/users/create'
                }
            ]
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'collapse',
            icon: icons.IconReceipt,
            children: [
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/orders'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/orders/create'
                }
            ]
        },
        {
            id: 'products',
            title: 'Products',
            type: 'collapse',
            icon: icons.IconBuildingStore,
            children: [
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/products'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/products/create'
                }
            ]
        },
        {
            id: 'brands',
            title: 'Brands',
            type: 'collapse',
            icon: icons.IconBuilding,
            children: [
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/brands'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/brands/create'
                }
            ]
        }
    ]
};

export default users;
