import BackEffect from "../../../BackEffect";
import ShadowBox from "../../../ShadowBox";

export default function BackEffectBoxR() {
  return (
    <>
      <BackEffect
        alignItems="end"
        justifyContent="center"
        display="flex"
        zIndex={0}
        position="absolute"
        height="25rem"
        right={0}
      >
        <ShadowBox
          width="5rem"
          borderRadius="30px 30px 0px 0px"
          height="60%"
          mr={{ md: "5.5rem", xs: "2rem" }}
          style={{ background: "rgba(198,89,143,25%)" }}
        />
      </BackEffect>
      <BackEffect
        alignItems="start"
        display="flex"
        width="100%"
        zIndex={0}
        justifyContent="center"
        position="absolute"
        height="20rem"
        left={0}
      >
        <ShadowBox
          width="5rem"
          height="80%"
          ml="11.5rem"
          borderRadius="0px 0px 30px 30px"
          style={{ background: "rgba(198,89,143,25%)" }}
        />
      </BackEffect>
    </>
  );
}
