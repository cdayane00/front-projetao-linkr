import React, { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { HandlerContext } from "../../contexts/handlerContext";
import { sharePost } from "../../services/api";
import { Wrapper, Panel, Description, ButtonWrapper } from "./styles";
import { callToast } from "../../utils";

export default function DialogShare() {
  const { isShare, setShare } = useContext(HandlerContext);
  const [isLoading, setLoading] = useState(false);

  return (
    <Wrapper open={isShare} onClose={() => setShare(false)}>
      <Panel>
        <Description>Are you sure you want to delete this post?</Description>
        <Buttons isLoading={isLoading} setLoading={setLoading} />
      </Panel>
    </Wrapper>
  );
}

function Buttons({ isLoading, setLoading }) {
  const { setShare, postId, userData } = useContext(HandlerContext);

  async function handleShareClick(id) {
    setLoading(true);
    try {
      await sharePost(id, userData.config);
      setTimeout(() => {
        setLoading(false);
        callToast("success", "Successfully reposted!");
        setShare(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        callToast("error", error?.response?.data);
        setShare(false);
      }, 1000);
    }
  }

  if (isLoading) {
    return (
      <ButtonWrapper>
        <button disabled={isLoading} type="submit" className="cancel">
          No, cancel
        </button>
        <button disabled={isLoading} type="submit" className="confirm">
          <ThreeDots color="#FFFFFF" height={17} width="100%" />
        </button>
      </ButtonWrapper>
    );
  }
  return (
    <ButtonWrapper>
      <button
        disabled={isLoading}
        type="submit"
        className="cancel"
        onClick={() => setShare(false)}
      >
        No, cancel
      </button>
      <button
        disabled={isLoading}
        type="submit"
        className="confirm"
        onClick={() => {
          handleShareClick(postId);
        }}
      >
        Yes, share!
      </button>
    </ButtonWrapper>
  );
}
