# React Bits adaptations

Source: https://github.com/DavidHDev/react-bits
Revision: ca44b3f9ee180676a06d7de8ec6bea84cddff85b

Adapted from `src/ts-default/Components/FlowingMenu` and
`src/ts-default/TextAnimations/ScrollReveal`. Original license: LICENSE.md.

FlowingMenu uses text-only project rows with React Router links, direction-aware
GSAP hover transitions and a CSS text loop. Animation is limited to fine-pointer
hover devices without reduced motion; keyboard focus keeps the project readable.

ScrollReveal reveals heading words with a short fade and upward movement once
they enter the viewport; scrolling back does not reverse the animation. Each instance
cleans up only its own animations with gsap.matchMedia, honors reduced motion,
and uses a semantic heading without a nested paragraph.
