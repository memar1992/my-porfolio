import shortscribeDashboard from '$lib/assets/shortscribe_dashboard_2.png';
import syncappsDashboard from '$lib/assets/syncapps_dashboard.png';
import mobileStlApp from '$lib/assets/mobile_stl_app.png';
import stlAdmin from '$lib/assets/stl_admin.png';
import steppetApp from '$lib/assets/steppet.png';
import easyReceiptApp from '$lib/assets/easyreceipt.png';

import type { ProjectType } from '$lib/types/ProjectType';

export const featuredProjects: ProjectType[] = [
	{
		name: 'EasyReceipt',
		summary:
			'Mobile receipt scanner app for quickly capturing, organizing, and managing receipts in one clean workflow.',
		role: 'Mobile app developer. Built and shipped a user-friendly scanning and receipt tracking experience.',
		tech: ['Flutter', 'iOS', 'OCR'],
		url: 'https://apps.apple.com/us/app/receipt-scanner-easyreceipt/id6760520233',
		thumbnail: easyReceiptApp
	},
	{
		name: 'Steppet: Step Tracker Pet',
		summary:
			'Gamified step tracker app that turns daily movement into a motivating virtual pet progress experience.',
		role: 'Mobile app developer. Implemented tracking flows, progression logic, and polished app UX.',
		tech: ['Flutter', 'iOS', 'HealthKit'],
		url: 'https://apps.apple.com/ph/app/steppet-step-tracker-pet/id6766063712',
		thumbnail: steppetApp
	},
	{
		name: 'Shortscribe',
		summary:
			'AI-powered product that turns long-form content into clear, useful short summaries for teams and creators.',
		role: 'Full-stack developer. Built the product UI, API workflows, and AI-assisted rewrite pipeline.',
		tech: ['Svelte', 'Express', 'Supabase'],
		url: 'https://www.shortscribe.online/',
		thumbnail: shortscribeDashboard
	},
	{
		name: 'SyncApps Integration Platform',
		summary:
			'Business integration platform that syncs data across apps to reduce manual work and keep operations consistent.',
		role: 'Backend and frontend developer. Built sync logic, automation flows, and operational dashboards.',
		tech: ['Java (Play Framework)', 'Alpine', 'PostgreSQL'],
		url: 'https://syncapps.cazoomi.com/login',
		thumbnail: syncappsDashboard
	},
	{
		name: 'STL Mobile Betting App',
		summary:
			'Mobile workflow product with smooth booking and wallet interactions for daily field operations and end users.',
		role: 'Lead mobile developer. Owned UX flow, client app implementation, and API integration.',
		tech: ['Ionic', 'Capacitor', 'React', 'Laravel API'],
		url: '/contact?project=stl-mobile-app',
		thumbnail: mobileStlApp,
		hideCta: true
	},
	{
		name: 'STL Admin System',
		summary:
			'Admin dashboard for handling users, reports, transactions, and day-to-day business operations in one system.',
		role: 'Full-stack developer. Built modules for access control, reporting, and operations management.',
		tech: ['Laravel', 'Alpine', 'MySQL'],
		url: '/contact?project=stl-admin-system',
		thumbnail: stlAdmin,
		hideCta: true
	}
];
