import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import React from "react";

import { Date } from "@site/src/components/blog/common";
import clsx from "clsx";

export const FeaturedBlogPostItem = () => {
    const { metadata } = useBlogPost();
    const {
        permalink,
        title,
        date,
        formattedDate,
        frontMatter,
        description,
        tags,
    } = metadata;

    const author = metadata.authors[0];

    return (
        <BlogPostItemContainer>
            <Link itemProp="url" to={permalink}>
                <div className="relative m-0 h-40 md:h-64 hover:brightness-90">
                    <img
                        src={`https://refine-web.imgix.net${frontMatter.image?.replace(
                            "https://refine.ams3.cdn.digitaloceanspaces.com",
                            "",
                        )}?h=256`}
                        alt={title}
                        className="absolute inset-0 h-full w-full rounded-[10px] object-cover mt-0"
                        loading="lazy"
                    />
                </div>
            </Link>
            <div className="px-4 py-4 md:px-6  md:py-6">
                <div className="mb-2 flex gap-1 md:mb-4 2xl:mb-6">
                    {tags.map((tag) => (
                        <Link
                            className={clsx(
                                "text-xs",
                                "bg-gray-100 dark:bg-gray-700",
                                "text-gray-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-400",
                                "no-underline",
                                "rounded",
                                "px-2 py-1",
                            )}
                            href={tag.permalink}
                            key={tag.permalink}
                        >
                            {tag.label}
                        </Link>
                    ))}
                </div>
                <div className="mb-2 md:mb-4 2xl:mb-6">
                    <Link
                        itemProp="url"
                        to={permalink}
                        className="no-underline hover:no-underline"
                        rel="noopener dofollow"
                    >
                        <div
                            className={clsx(
                                "mb-2 md:mb-4 2xl:mb-6",
                                "text-gray-700 dark:text-gray-200",
                                "text-sm sm:text-2xl 2xl:text-[32px] 2xl:leading-10",
                                "font-lg",
                                "font-bold",
                            )}
                        >
                            {title}
                        </div>
                    </Link>
                    <div
                        className={clsx(
                            "line-clamp-3",
                            "text-gray-700 dark:text-gray-300",
                            "text-xs md:text-base 2xl:text-xl",
                        )}
                    >
                        {description}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href={`/blog/author/${author?.key}`}
                        itemProp="url"
                        className={clsx(
                            "text-gray-600 hover:text-gray-600",
                            "dark:text-gray-400 hover:dark:text-gray-400",
                            "text-xs 2xl:text-base",
                            "no-underline",
                        )}
                    >
                        {author?.name}
                    </Link>
                    <span
                        className={clsx(
                            "w-[4px] h-[4px] rounded-full",
                            "bg-gray-600 dark:bg-gray-500",
                        )}
                    ></span>
                    <span
                        className={clsx(
                            "text-gray-600 hover:text-gray-600",
                            "dark:text-gray-400 hover:dark:text-gray-400",
                            "text-xs 2xl:text-base",
                            "leading-6",
                            "no-underline",
                        )}
                    >
                        <Date date={date} formattedDate={formattedDate} />
                    </span>
                </div>
            </div>
        </BlogPostItemContainer>
    );
};
