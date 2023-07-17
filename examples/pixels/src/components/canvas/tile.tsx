import { Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { Contributors } from "../../components/avatar";
import { Canvas } from "../../types";
import { CanvasItem, DisplayCanvas } from "./index";

type CanvasTileProps = {
    canvas: Canvas;
};

export const CanvasTile: React.FC<CanvasTileProps> = ({ canvas }) => {
    return (
        <DisplayCanvas canvas={canvas}>
            {(pixels) =>
                pixels ? (
                    <Link
                        key={canvas.id}
                        className="canvas-item"
                        to={`/canvases/show/${canvas.id}`}
                    >
                        <CanvasItem
                            canvas={canvas}
                            pixels={pixels}
                            scale={25 / canvas.width}
                            active={false}
                        />
                        <Contributors pixels={pixels} />
                    </Link>
                ) : (
                    <Skeleton paragraph={{ rows: 8 }} />
                )
            }
        </DisplayCanvas>
    );
};
