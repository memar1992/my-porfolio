import type { ServiceType } from '$lib/types/ServiceType';

export const services: ServiceType[] = [
	{
		title: 'Web Applications',
		description: 'Dashboards, booking systems, internal tools, and business platforms.',
		icon: 'fa-window-maximize'
	},
	{
		title: 'Mobile Apps',
		description: 'Cross-platform apps using Ionic, Capacitor, React Native, or Flutter.',
		icon: 'fa-mobile-screen-button'
	},
	{
		title: 'Backend & APIs',
		description: 'Secure APIs, automation workflows, integrations, and database systems.',
		icon: 'fa-server'
	},
	{
		title: 'Product Improvements',
		description: 'Bug fixes, performance work, UX cleanup, and feature upgrades.',
		icon: 'fa-wrench'
	}
];
