import React, { Fragment } from "react";
import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useHistory } from "@docusaurus/router";

import { CloseIcon } from "./icons/close";

export const LandingPlaygroundModal = () => {
    const { search } = useLocation();
    const { replace } = useHistory();

    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 960px)");

        setIsActive(mediaQuery.matches);

        const listener = () => {
            setIsActive(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", listener);

        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    }, []);

    const [params, setParams] = React.useState<Record<string, string>>({});

    React.useEffect(() => {
        const _params = new URLSearchParams(search);
        const paramsObj: Record<string, string> = {};

        // @ts-expect-error no downlevel iteration
        for (const [key, value] of _params.entries()) {
            paramsObj[key] = value;
        }

        setParams(paramsObj);
    }, [search]);

    React.useEffect(() => {
        if (params.playground) {
            // scroll to element with id=playground
            const playgroundElement = document.getElementById("playground");
            if (playgroundElement) {
                playgroundElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            }
        }
    }, [params.playground]);

    const closePlayground = React.useCallback(() => {
        replace({
            search: "",
        });
    }, []);

    if (!isActive) return null;

    return (
        <Transition appear show={!!params.playground} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10 bg-gray-100 h-full w-full"
                onClose={closePlayground}
            >
                <div
                    className={clsx(
                        "fixed top-0 left-0 right-0",
                        "overflow-y-auto",
                        "bg-gray-100",
                        "h-full",
                        "w-full",
                        "z-[10]",
                    )}
                >
                    <div
                        className={clsx(
                            "flex",
                            "py-5",
                            "px-4",
                            "landing-md:px-5",
                            "w-full",
                            "absolute",
                            "left-0 top-0",
                            "items-center justify-end",
                            "z-[1]",
                            "max-w-[900px]",
                            "mx-auto",
                        )}
                    >
                        <button
                            type="button"
                            className={clsx(
                                "rounded-lg",
                                "text-gray-500",
                                "hover:bg-gray-200",
                                "active:scale-90",
                                "transition-transform duration-200 ease-in-out",
                                "focus:outline-none",
                                "appearance-none",
                            )}
                        >
                            <CloseIcon onClick={closePlayground} />
                        </button>
                    </div>
                    <div
                        className={clsx(
                            "flex items-start justify-center",
                            "min-h-full h-full",
                            "text-center",
                            "overflow-auto",
                        )}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className={clsx("w-full", "h-full")}>
                                <iframe
                                    src="https://refine.new/embed-form"
                                    className={clsx(
                                        "max-w-[830px]",
                                        "mx-auto",
                                        "w-full",
                                        "h-full",
                                        "border-none",
                                    )}
                                />
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
