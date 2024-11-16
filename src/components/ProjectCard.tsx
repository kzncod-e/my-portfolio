import { Col } from "react-bootstrap";

export default function ProjectCard({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          {" "}
          <img src={imgUrl} className="h-full min-h-64" alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </>
  );
}
