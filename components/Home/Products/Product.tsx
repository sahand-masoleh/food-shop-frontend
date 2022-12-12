import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DBProductable } from "@/types/Product";
import useFormattedPrice from "@/hooks/useFormattedPrice";
import * as s from "./Product.styles";

export type Productable = Pick<
	DBProductable,
	"name" | "cover" | "slices" | "price"
>;

function Product({ name, cover, slices, price }: Productable) {
	const [hovered, setHovered] = useState(false);
	const formattedPrice = useFormattedPrice(price);

	function handleHover() {
		setHovered((prevHoevered) => !prevHoevered);
	}

	return (
		<s.ARTICLE_Product
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			title={name}
		>
			<Link href={`/products/${name}`}>
				<Image
					src={cover}
					alt={name}
					width={320}
					height={480}
					key={name + "_unhovered"}
				/>
				<AnimatePresence mode="wait">
					{hovered && (
						<s.M_Image
							src={slices}
							alt={name}
							width={320}
							height={480}
							key={name + "_hovered"}
						/>
					)}
				</AnimatePresence>
			</Link>
			<div>
				<span className="name">{name}</span>
				<span className="price">{formattedPrice}/kg</span>
			</div>
		</s.ARTICLE_Product>
	);
}

export default Product;
