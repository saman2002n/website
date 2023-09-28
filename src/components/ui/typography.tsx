import { ComponentProps } from "react";

import { clsx } from "clsx";

export function TypographyH1({
	children,
	className,
	...props
}: ComponentProps<"h1">) {
	return (
		<h1
			className={clsx(
				"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
				className,
			)}
			{...props}
		>
			{children}
		</h1>
	);
}

export function TypographyH2({
	children,
	className,
	...props
}: ComponentProps<"h2">) {
	return (
		<h2
			className={clsx(
				"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	);
}

export function TypographyH3({
	children,
	className,
	...props
}: ComponentProps<"h3">) {
	return (
		<h3
			className={clsx(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		>
			{children}
		</h3>
	);
}

export function TypographyH4({
	children,
	className,
	...props
}: ComponentProps<"h4">) {
	return (
		<h4
			className={clsx(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		>
			{children}
		</h4>
	);
}

export function TypographyP({
	children,
	className,
	...props
}: ComponentProps<"p">) {
	return (
		<p
			className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		>
			{children}
		</p>
	);
}

export function TypographyBlockquote({
	children,
	className,
	...props
}: ComponentProps<"blockquote">) {
	return (
		<blockquote
			className={clsx("mt-6 border-l-2 pl-6 italic", className)}
			{...props}
		>
			{children}
		</blockquote>
	);
}

export function TypographyInlineCode({
	children,
	className,
	...props
}: ComponentProps<"code">) {
	return (
		<code
			className={clsx(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</code>
	);
}

export function TypographyLead({
	children,
	className,
	...props
}: ComponentProps<"p">) {
	return (
		<p className={clsx("text-xl text-muted-foreground", className)} {...props}>
			{children}
		</p>
	);
}

export function TypographyLarge({
	children,
	className,
	...props
}: ComponentProps<"div">) {
	return (
		<div className={clsx("text-lg font-semibold", className)} {...props}>
			{children}
		</div>
	);
}

export function TypographySmall({
	children,
	className,
	...props
}: ComponentProps<"small">) {
	return (
		<small
			className={clsx("text-sm font-medium leading-none", className)}
			{...props}
		>
			{children}
		</small>
	);
}

export function TypographyMuted({
	children,
	className,
	...props
}: ComponentProps<"p">) {
	return (
		<p className={clsx("text-sm text-muted-foreground", className)} {...props}>
			{children}
		</p>
	);
}
