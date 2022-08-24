// assets
import {
    IconBrandChrome,
    IconHelp,
    IconUsers,
    IconReceipt,
    IconBuildingStore,
    IconOutlet,
    IconBuilding,
    IconDashboard
} from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconUsers, IconReceipt, IconBuildingStore, IconOutlet, IconBuilding, IconDashboard };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admins = {
    id: 'admin',
    title: 'Admin',
    caption: 'Selamat datang',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/app/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
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
                    url: '/app/users'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/app/users/create'
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
                    url: '/app/orders'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/app/orders/create'
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
                    url: '/app/products'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/app/products/create'
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
                    url: '/app/brands'
                },
                {
                    id: 'create',
                    title: 'Create',
                    type: 'item',
                    url: '/app/brands/create'
                }
            ]
        }
    ]
};

export default admins;
