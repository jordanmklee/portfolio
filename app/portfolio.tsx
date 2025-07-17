"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import {
	Code2,
	Github,
	Linkedin,
	Mail,
	Moon,
	Sun,
	Server,
	Wrench,
	Paintbrush,
	ArrowUpRight
} from "lucide-react"

import Image from "next/image"
import { useTheme } from "next-themes"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Portfolio() {
	const { theme, setTheme } = useTheme()

	const about = {
		Frontend: {
			icon: Code2,
			description: "Develops dynamic, interactive interfaces with modern frameworks, optimized for accessibility and performance."
		},
		Backend: {
			icon: Server,
			description: "Builds reliable and scalable systems that power secure data handling and business logic."
		},
		Design: {
			icon: Paintbrush,
			description: "Transforms ideas into polished interfaces that are intuitive, accessible, and user-focused."
		},
	}

	const techStack = [
		{
			logo: `${basePath}/assets/react-logo.png`,
			title: "React",
			className: "bg-gradient-to-br from-sky-300/10 via-blue-600/20 to-indigo-600/10",
		},
		{
			logo: `${basePath}/next.svg`,
			title: "Next.js",
			className: "bg-gradient-to-br",
		},
		{
			logo: `${basePath}/assets/tailwind.png`,
			title: "Tailwind",
			className: "bg-gradient-to-br from-sky-300/10 via-blue-600/20 to-indigo-600/10",
		},
		{
			logo: `${basePath}/assets/net-core-logo.png`,
			title: "ASP.NET Core",
			className: "bg-gradient-to-br from-violet-300/20 via-violet-600/20 to-indigo-600/10",
		},
		{
			logo: `${basePath}/assets/ef-logo.png`,
			title: "Entity Framework Core",
			className: "bg-gradient-to-br from-violet-600/10 via-purple-600/20 to-violet-950/10",
		},
		{
			logo: `${basePath}/assets/mysql-logo.png`,
			title: "MySQL",
			className: "bg-gradient-to-br from-sky-950/30 to-amber-800/30",
		},
	]

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	const handleOpenResumePDF = () => {
		window.open(`${basePath}/assets/jordan-lee-resume.pdf`, '_blank');
	};

	const handleEmailClick = () => {
		window.location.href = `mailto:jordan.mk.lee@gmail.com`;
	};
	
	const handleLinkedInClick = () => {
		window.open("https://linkedin.com/in/jordanmklee", "_blank");
	}

	const handleGithubClick = () => {
		window.open("https://github.com/jordanmklee", "_blank");
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center">
					<div className="mr-4 flex">
						<button
							onClick={() => scrollToSection("hero")}
							className="transition-colors hover:text-foreground/80 mr-6 flex items-center space-x-2 cursor-pointer">
							<Code2 className="h-6 w-6" />
							<span className="font-bold">Jordan Lee</span>
						</button>
					</div>
					
					<div className="ml-auto flex items-center space-x-2">
						<Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
						<Button
							size="sm"
							onClick={handleEmailClick}>
							Contact me
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section id="hero" className="container max-w-[800] py-8">
				<div className="flex gap-6 flex-col lg:flex-row lg:gap-12">
					<div className="w-40 h-40 lg:w-[196px] lg:h-[196px] flex-shrink-0 rounded-full overflow-hidden border-4 border-border relative">
						<Image
							src={`${basePath}/assets/portrait.jpg`}
							alt="Jordan Lee"
							fill
							className="object-cover"/>
					</div>
					
					<div className="space-y-8">
						<div className="space-y-4">	
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Jordan Lee</h2>
							
							<p className="text-muted-foreground md:text-lg">
								Full-stack developer specializing in UI/UX, passionate about creating intuitive and user-friendly applications.
							</p>

							<div className="flex space-x-4">
								<Button
									size="lg"
									onClick={handleOpenResumePDF}>
									View Resume
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			

			<section className="container max-w-[800] space-y-8 pb-8">
				<Separator/>

				<div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 items-center">
					<div className="flex gap-2 items-center">
						<Mail className="mr-2 h-4 w-4" />
						<p className="text-sm text-muted-foreground">Email</p>
					</div>

					<Button
						variant="link"
						size="lg"
						onClick={handleEmailClick}
						className="justify-start">
						jordan.mk.lee@gmail.com
						<ArrowUpRight/>
					</Button>

					<div className="flex gap-2 items-center">
						<Linkedin className="mr-2 h-4 w-4" />
						<p className="text-sm text-muted-foreground">LinkedIn</p>
					</div>

					<Button
						variant="link"
						size="lg"
						onClick={handleLinkedInClick}
						className="justify-start">
						/in/jordanmklee
						<ArrowUpRight/>
					</Button>

					<div className="flex gap-2 items-center">
						<Github className="mr-2 h-4 w-4" />
						<p className="text-sm text-muted-foreground">Github</p>
					</div>

					<Button
						variant="link"
						size="lg"
						onClick={handleGithubClick}
						className="justify-start">
						jordanmklee
						<ArrowUpRight/>
					</Button>
				</div>
			</section>

			{/* About Section */}
			<section className="container max-w-[800] space-y-8 pb-8">
				<Separator/>

				<div className="grid gap-6 md:grid-cols-3">
					{Object.entries(about).map(([category, { icon: Icon, description }]) => (
						<Card key={category}>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Icon className="h-5 w-5"/>
									{category}
								</CardTitle>
							</CardHeader>

							<CardContent>
								<p className="text-sm">{description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Tech Stack */}
			<section className="container max-w-[800] space-y-8 pb-8">
				<Separator/>

				<div className="space-y-8">
					<div className="space-y-2">
						<h3 className="text-2xl font-bold text-center">Tech Stack</h3>
						<p className="text-center text-muted-foreground">
							Here are some of the tools and technologies I use to craft responsive, full-featured applications.
						</p>
					</div>
				</div>

				<div className="grid gap-8 grid-cols-2 md:grid-cols-3">
					{techStack.map((item, index) => (
						<Card
							key={index}
							className={`${item.className} flex flex-col h-48`}>
							<CardContent className="flex flex-col flex-1 items-center justify-center gap-4 px-4 text-center">
								<div className="relative h-20 w-full max-w-[120px] px-6">
									<Image
										src={item.logo}
										alt=""
										layout="fill"
										objectFit="contain"
										className={item.title == "Next.js" ? "dark:filter dark:invert" : ""}/>
								</div>

								<CardTitle className="text-lg w-full">{item.title}</CardTitle>
							</CardContent>
						</Card>

					))}
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-16 bg-muted/50">
				<div className="container">
					<div className="space-y-12">
						<div className="space-y-4 text-center">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch</h2>
							<p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
								I'm always interested in new opportunities and exciting challenges. Let's connect!
							</p>
						</div>
						<div className="flex justify-center">
							<Card className="w-full max-w-md">
								<CardContent className="space-y-4">
									<Button className="w-full" size="lg">
										<Mail className="mr-2 h-4 w-4"/>
										jordan.mk.lee@gmail.com
									</Button>
									<div className="flex space-x-2">
										<Button variant="outline" className="flex-1 bg-transparent">
											<Linkedin className="mr-2 h-4 w-4"/>
											LinkedIn
										</Button>
										<Button variant="outline" className="flex-1 bg-transparent">
											<Github className="mr-2 h-4 w-4"/>
											GitHub
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
						<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
							© 2025 Jordan Lee
						</p>
					</div>
					<div className="flex items-center space-x-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={handleEmailClick}>
							<Mail className="h-4 w-4"/>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleLinkedInClick}>
							<Linkedin className="h-4 w-4"/>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleGithubClick}>
							<Github className="h-4 w-4"/>
						</Button>
					</div>
				</div>
			</footer>
		</div>
	)
}
