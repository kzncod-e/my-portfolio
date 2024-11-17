import { Col } from "react-bootstrap";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  link,
}: {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}) {
  return (
    <>
      <Col sm={6} md={4}>
        <a href={link}>
          <div className="proj-imgbx text-white">
            {" "}
            <img src={imgUrl} className="h-full min-h-64" alt="" />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </Col>
    </>
  );
}
