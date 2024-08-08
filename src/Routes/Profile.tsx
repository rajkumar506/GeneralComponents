import React, { useEffect } from "react";
import {
  useParams,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
export const Profile = () => {
  const params = useParams();
  const location = useLocation();
  const match = useMatch("/squad/");
  const navigate = useNavigate();
  console.log("my params", params);
  useEffect(() => {
    if (params?.id === ":3") {
      navigate("/team");
    }
  }, []);

  return <div>hello profile ==</div>;
};
