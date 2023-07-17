import clsx from "clsx";
import React from "react";
import { BlogFooter } from "./blog-footer";
import { CommonHeader } from "./common-header";
import { CommonLayout } from "./common-layout";

export const RefineBlogLayout = (props: any) => {
    const { children, toc, ...layoutProps } = props;

    return (
        <CommonLayout {...layoutProps}>
            {/* If there's TOC, then we can say that this is a blog post page. */}
            {/* Then we can pass `trackProgress` prop to the header. */}
            <CommonHeader hasSticky={true} trackProgress={!!toc} />
            <div
                className={clsx(
                    "flex",
                    "justify-center",
                    "mx-auto",
                    "max-w-screen-blog-max",
                    "w-full",
                )}
            >
                <div className={clsx("refine-prose", "flex-1", "min-w-0")}>
                    {children}
                </div>
                {toc && (
                    <div
                        className={clsx(
                            "w-[280px]",
                            "hidden blog-md:block",
                            "flex-shrink-0",
                        )}
                    >
                        {toc}
                    </div>
                )}
            </div>
            <BlogFooter />
        </CommonLayout>
    );
};
