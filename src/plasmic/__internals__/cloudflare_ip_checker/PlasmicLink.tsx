/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ventExTyscvZpogFdoiw6H
// Component: yIoAz1MvEm
import * as React from "react";
import {
  hasVariant,
  createPlasmicElement,
  RenderOpts,
  Override,
  classNames,
  Flex,
  RenderFunc,
  RenderFuncOverrides,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_cloudflare_ip_checker.css"; // plasmic-import: ventExTyscvZpogFdoiw6H/projectcss
import "./PlasmicLink.css"; // plasmic-import: yIoAz1MvEm/css

export type PlasmicLink__VariantsArgs = {};

export type PlasmicLink__ArgsType = {};

const PlasmicLink__RenderFuncs = {
  root: (
    opts: RenderOpts<
      PlasmicLink__VariantsArgs,
      PlasmicLink__ArgsType,
      {
        root?: Flex<"a">;
      }
    >
  ): React.ReactNode => {
    const variants = opts.variants || {};
    const args = opts.args || {};
    const overrides = opts.overrides || {};
    return (
      <a
        data-plasmic-override={overrides.root}
        className={classNames({
          Link__root__EitzE: true,
          "plasmic-default__a": true,
          "plasmic-default__all": true
        })}
        href={"https://www.streamlineicons.com/" as const}
      >
        {"Streamline Icons"}
      </a>
    );
  }
};

const PlasmicLink__FCs = {
  root: undefined
};

class PlasmicLink__Renderer extends Renderer<
  PlasmicLink__VariantsArgs,
  PlasmicLink__ArgsType,
  typeof PlasmicLink__RenderFuncs,
  "root"
> {
  constructor(
    variants: PlasmicLink__VariantsArgs,
    args: PlasmicLink__ArgsType
  ) {
    super(variants, args, PlasmicLink__RenderFuncs, "root");
  }

  protected create(
    variants: PlasmicLink__VariantsArgs,
    args: PlasmicLink__ArgsType
  ) {
    return new PlasmicLink__Renderer(variants, args);
  }

  getInternalVariantProps() {
    return [];
  }

  getInternalArgProps() {
    return [];
  }

  forNode(name: "root"): NodeRenderer<typeof PlasmicLink__RenderFuncs["root"]>;
  forNode(name: keyof typeof PlasmicLink__RenderFuncs) {
    return super.forNode(name);
  }
}

interface PlasmicLinkRootProps {
  variants?: PlasmicLink__VariantsArgs;
  args?: Partial<PlasmicLink__ArgsType>;
  root?: Flex<"a">;
}

export const PlasmicLink = ((props: PlasmicLinkRootProps) => {
  return new PlasmicLink__Renderer(props.variants || {}, props.args || {})
    .forNode("root")
    .withOverrides({
      root: props.root
    })
    .render();
}) as React.FunctionComponent<PlasmicLinkRootProps> & {
  createRenderer: () => PlasmicLink__Renderer;
};

PlasmicLink.createRenderer = () => new PlasmicLink__Renderer({}, {});

export default PlasmicLink;
/* prettier-ignore-end */
