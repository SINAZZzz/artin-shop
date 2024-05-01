import BackEffect from "../../../BackEffect";
import ShadowBox from "../../../ShadowBox";

export default function BackEffectBoxL() {
  return (
    <>
      <BackEffect
        display="flex"
        alignItems="end"
        zIndex={0}
        position="absolute"
        height="25rem"
      >
        <ShadowBox
          width="5rem"
          height="60%"
          mr="1.5rem"
          borderRadius="30px 30px 0px 0px"
          style={{ background: "rgba(21,126,247,15%)" }}
        />
      </BackEffect>
      <BackEffect
        display="flex"
        alignItems="start"
        position="absolute"
        justifyContent="end"
        zIndex={0}
        height="20rem"
        width="100%"
        left={0}
      >
        <ShadowBox
          width="5rem"
          height="80%"
          ml={{ lg: "5.5rem", md: "5.5rem", xs: "2.5rem" }}
          borderRadius="0px 0px 30px 30px"
          style={{ background: "rgba(21,126,247,15%)" }}
        />
      </BackEffect>
    </>
  );
}
