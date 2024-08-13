import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-f">
      {label && <label className="inline-block mb-1 pl-1"> {label} </label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="6akfj7ymiduh26xorj3k1bvuj7s92fatu8ixx6bpce92zvhf"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor |\
              alignleft aligncenter bold italic forecolor |\
              alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |\
              removeformat | help",
              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;

// for reference
// <Editor
//   initialValue="default value"
//   init={{
//     branding: false,
//     height: 500,
//     menubar: true,
//     plugins: [
//       "advlist autolink lists link image charmap print preview anchor",
//       "searchreplace visualblocks code fullscreen",
//       "insertdatetime medialtable paste code help wordcount",
//     ],
//     toolbar:
//       "undo redo | formatselect | bold italic backcolor | \
//     alignleft aligncenter alignright alignjustify | \
//     bullist numlist outdent indent | remove format | help",
//   }}
// />