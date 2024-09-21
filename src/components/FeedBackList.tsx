import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedBackList() {
  return (
    <ul className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>450</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>By</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            sint aspernatur suscipit saepe pariatur inventore.
          </p>
        </div>

        <p>4d</p>
      </li>
    </ul>
  );
}
