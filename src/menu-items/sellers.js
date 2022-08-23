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

const sellers = {
    id: 'seller',
    title: 'Seller',
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
        }
    ]
};

export default sellers;
