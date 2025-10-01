import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TemplatesSectionProps {
	onPickExample: (exampleText: string) => void;
}

export default function TemplatesSection({ onPickExample }: TemplatesSectionProps) {
	const examples = [
		{
			title: "E-commerce Platform",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Floating_geometric_panels_with_glowing_icons_f_cd9121b1-2415-449c-9fd6-510878bd750a_0.png",
			exampleText:
				"An e-commerce web app for local artisans with product catalog, inventory tracking, shopping cart, Stripe checkout, order history, and admin dashboards.",
		},
		{
			title: "Project Management Tool",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Cling_up_with_ideas_--sref_httpss.mj.runt25rJr_f42dae66-01e3-48f8-aa38-eb9e747e6238_3.png",
			exampleText:
				"A project management tool with workspaces, kanban boards, task assignments, due dates, file attachments, and real-time comments.",
		},
		{
			title: "Social Media App",
			mediaType: "video" as const,
			src: "/videos/social_sam.mckay.edna_Network_of_nodes_connected_by_glowing_lines_ea_68369123-6a21-4b9e-8697-722a42766ab7_2.mp4",
			exampleText:
				"A social app where users create profiles, post updates with images, follow others, like/comment, and receive real-time notifications.",
		},
		{
			title: "Fitness Tracking App",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Vibing_in_business_environment_--sref_httpss.m_22516afc-3570-4bae-9dfd-4f87a59fc82b_1.png",
			exampleText:
				"A fitness app to log workouts, track progress over time, set goals, integrate with wearables, and visualize metrics on dashboards.",
		},
		{
			title: "Telemedicine Platform",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Network_of_nodes_connected_by_glowing_lines_ea_1fa62e10-cb69-40e5-bb59-618e8919caf8_1.png",
			exampleText:
				"A telemedicine platform for video consultations, appointment scheduling, patient profiles, prescriptions, and clinician notes.",
		},
		{
			title: "Learning Management System",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Abstract_streams_of_glowing_lines_flowing_into_0943014d-588f-4ae4-bf32-7e8902c72d77_0.png",
			exampleText:
				"An LMS with courses, lessons, quizzes, student enrollment, grading, certificates, and instructor analytics.",
		},
		{
			title: "CRM",
			mediaType: "video" as const,
			src: "/videos/social_sam.mckay.edna_Circular_abstract_loop_of_arrows_where_text_vo_7d73c7eb-7181-4271-a2e6-f97078b9f8f4_0.mp4",
			exampleText:
				"A CRM to manage leads and accounts, track pipelines, log activities, send emails, and produce sales reports.",
		},
		{
			title: "Marketplace",
			mediaType: "image" as const,
			src: "/images/sam.mckay.edna_Abstract_anantics_--sref_httpss.mj.runt25rJrby_c8d461d1-a6cc-46d0-8536-0599a81bce78_3.png",
			exampleText:
				"A two-sided marketplace connecting buyers and sellers with listings, search/filter, messages, reviews, and escrow payments.",
		},
	];

	return (
		<section id="examples" className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6654f5] via-[#ca5a8b] to-[#f2b347]">Examples</h2>
					<p className="mt-3 text-muted-foreground">Click an example to instantly prefill the idea box and get started.</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{examples.map((item) => {
						return (
							<div key={item.title} className="rounded-2xl p-[2px] transition-transform hover:scale-[1.01]" style={{ background: 'linear-gradient(90deg, #6654f5, #ca5a8b, #f2b347)' }}>
								<Card className="h-full bg-white rounded-[15px] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onPickExample(item.exampleText)}>
									<CardHeader>
										<div className="relative aspect-video w-full overflow-hidden rounded-xl">
											{item.mediaType === 'video' ? (
												<video className="absolute inset-0 h-full w-full object-cover" src={item.src} autoPlay muted loop playsInline aria-hidden="true" />
											) : (
												<img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
											)}
											<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
										</div>

										<div className="mt-3">
											<CardTitle className="text-base leading-tight">{item.title}</CardTitle>
											<CardDescription className="mt-1">Click to prefill the idea with a detailed starting point.</CardDescription>
										</div>
									</CardHeader>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}


