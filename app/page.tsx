import { css } from "@/styled-system/css";

export default function Home() {
  return (
    <>
      <header
        className={css({
          gridArea: "header",
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <h1
          className={css({
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "bold",
          })}
        >
          hex-image
        </h1>
      </header>
      <main
        className={css({
          gridArea: "main",
          backgroundColor: "#f5f5f5",
          display: "grid",
          padding: "20px",
          gridTemplate: `
            "container  container container ... btn" 20fr
            ".......... ......... ......... ... ..." 10px
            "checkboxes ......... select    ... ..." 1fr
            / 3fr 3fr 3fr 30px 2fr;
          `,
        })}
      >
        <div
          className={css({
            gridArea: "container",
            padding: "20px",
            backgroundColor: "#ef5350",
            borderRadius: "10px",
            border: "1px solid #ccc",
          })}
        ></div>

        <div
          className={css({
            gridArea: "checkboxes",
            display: "flex",
            alignItems: "center",
          })}
        >
          <label
            className={css({
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            })}
          >
            <input type="checkbox" id="hex_toggle" />
            16進数表記
          </label>
          <label
            className={css({
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            })}
          >
            <input type="checkbox" id="rgb_toggle" />
            RGB表記
          </label>
        </div>

        <select
          className={css({
            gridArea: "select",
            marginRight: "20px",
          })}
          disabled
        >
          <option value="Gray">グレースケール</option>
          <option value="Red">赤</option>
          <option value="Green">緑</option>
          <option value="Blue">青</option>
        </select>

        <button
          className={css({
            gridArea: "btn",
            cursor: "pointer",
            backgroundColor: "#333",
          })}
        ></button>
      </main>
    </>
  );
}
