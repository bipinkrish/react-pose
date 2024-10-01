'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import { PoseViewer as PoseViewerElement, defineCustomElement as definePoseViewer } from "pose-viewer/dist/components/pose-viewer";
import React from 'react';

type PoseViewerEvents = {
    onCanplaythrough$: EventName<CustomEvent<void>>,
    onEnded$: EventName<CustomEvent<void>>,
    onLoadeddata$: EventName<CustomEvent<void>>,
    onLoadedmetadata$: EventName<CustomEvent<void>>,
    onLoadstart$: EventName<CustomEvent<void>>,
    onPause$: EventName<CustomEvent<void>>,
    onPlay$: EventName<CustomEvent<void>>,
    onFirstRender$: EventName<CustomEvent<void>>,
    onRender$: EventName<CustomEvent<void>>
};

export const PoseViewer: StencilReactComponent<PoseViewerElement, PoseViewerEvents> = /*@__PURE__*/ createComponent<PoseViewerElement, PoseViewerEvents>({
    tagName: 'pose-viewer',
    elementClass: PoseViewerElement,
    react: React,
    events: {
        onCanplaythrough$: 'canplaythrough$',
        onEnded$: 'ended$',
        onLoadeddata$: 'loadeddata$',
        onLoadedmetadata$: 'loadedmetadata$',
        onLoadstart$: 'loadstart$',
        onPause$: 'pause$',
        onPlay$: 'play$',
        onFirstRender$: 'firstRender$',
        onRender$: 'render$'
    } as PoseViewerEvents,
    defineCustomElement: definePoseViewer
});
