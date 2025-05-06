import Image from "next/image";
import "./globals.css";
import Text from "@/components/Text";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  return (
    <>
      <h1>
        Hello, Next.js!
        <Text />
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="border p-4">
            <h2>{course.title}</h2>
            {/* <h2>{course.instructor.firstName + }</h2> */}
            <p>{course.subtitle}</p>
            <p>{course.description}</p>
            <p>Category: {course?.category?.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
