import { layerOf, pickTags } from "@/lib/stack";

export function Tag({ name }: { name: string }) {
  return <span className={`tag t-${layerOf(name)}`}>{name}</span>;
}

/** A spread of tags across layers, with a "+N" chip for the rest. */
export function TagSpread({ tags, max }: { tags: string[]; max: number }) {
  const { shown, rest } = pickTags(tags, max);
  return (
    <span className="tags">
      {shown.map((t) => (
        <Tag key={t} name={t} />
      ))}
      {rest > 0 && <span className="tag t-more">+{rest}</span>}
    </span>
  );
}
