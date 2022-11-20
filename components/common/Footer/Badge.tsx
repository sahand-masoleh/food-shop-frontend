import { useState, useEffect } from "react";
import Badge01 from "@/assets/badges/footer-badge-01.svg";
import Badge02 from "@/assets/badges/footer-badge-02.svg";
import Badge03 from "@/assets/badges/footer-badge-03.svg";
import Badge04 from "@/assets/badges/footer-badge-04.svg";
import Badge05 from "@/assets/badges/footer-badge-05.svg";

interface Badgeable {
	color: string;
}

function Badge({ color }: Badgeable) {
	const [number, setNumber] = useState(0);
	useEffect(() => {
		setNumber(Math.floor(Math.random() * foods.length));
	}, []);

	const foods: React.FC<React.SVGProps<SVGSVGElement>>[] = [
		Badge01,
		Badge02,
		Badge03,
		Badge04,
		Badge05,
	];

	const Badge = foods[number];

	return (
		<Badge
			style={{ "--badge-color": `var(--${color})` } as React.CSSProperties}
		/>
	);
}

export default Badge;
