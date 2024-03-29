import React, { useEffect, useState } from "react";

const Gear = () => {
  const [gearStyleAnimation, setGearStyleAnimation] = useState({
    gear: "",
    gear2: "",
    gear3: "",
  });

  useEffect(() => {
    const calcCenter = () => {
      const gearClasses = ["gear", "gear2", "gear3"];

      const center = {};

      // liste la totalité des engrenages
      // Récupère le centre de chacun d'entre à partir de leur box
      gearClasses.forEach((gearClass) => {
        const svgElement = document.querySelector(`.${gearClass}`);
        const bbox = svgElement.getBBox();
        const x_center = bbox.x + bbox.width / 2;
        const y_center = bbox.y + bbox.height / 2;
        console.log(`Centre de l'élément : (${x_center}, ${y_center})`);

        center[gearClass] = `${x_center}px ${y_center}px`;
      });
      setGearStyleAnimation(center);
    };
    calcCenter();
  }, []);

  // Temps => T => let t = 10
  // gear2 => let R =
  // autre gear => r
  // T x (R/r)

  let timeRotateGear = 5;
  let numberTeethGreatGear = 9;
  let numberTeethLittleGear = 7;
  let numberTeethMediumGear = 10;

  let ratioMedGre = numberTeethMediumGear / numberTeethGreatGear;
  let ratioLittGre = numberTeethLittleGear / numberTeethGreatGear;

  let timeRotateMediumGear = timeRotateGear * ratioMedGre + "s";
  let timeRotateLittleGear = timeRotateGear * ratioLittGre + "s";

  console.log("Log useState gearStyleAnimation :", gearStyleAnimation);

  return (
    <svg className="svgGear" viewBox="0 0 477.93 415">
      <g fill="currentColor" stroke="none">
        <g className="translateGear">
          <g
            className="gear"
            style={{
              transformOrigin: gearStyleAnimation.gear,
              animation: `rotate ${timeRotateLittleGear} linear infinite reverse`,
            }}
          >
            <path
              id="yourPathElementId"
              className="gearColor"
              d="M86.44,205.75l-5-.45a87.1,87.1,0,0,1-26.85-6.93l-4.6-2,2.41-19.53a69.89,69.89,0,0,1-14.19-12l-18.85,5.62-2.75-4.2A86.35,86.35,0,0,1,5.32,141L4,136.11l16.75-10.3a69,69,0,0,1,.53-18.55L5.16,96l1.57-4.77A86.46,86.46,0,0,1,19.5,66.64l3-4L41,69.3A68,68,0,0,1,55.8,58.14L54.52,38.51l4.7-1.75a87.45,87.45,0,0,1,27.18-5.4l5-.18,6.3,18.64a68.91,68.91,0,0,1,18,4.63l14.54-13.23,4.3,2.59a87.47,87.47,0,0,1,21.15,17.88L159,65.5,148.35,82.05a68.52,68.52,0,0,1,7.58,17l19.42,3.12.65,5a87.62,87.62,0,0,1-.79,27.7l-.93,4.93-19.58,2a68.42,68.42,0,0,1-8.53,16.48l9.66,17.12L152.36,179a86.74,86.74,0,0,1-22.15,16.68L125.78,198,112,183.91a68.84,68.84,0,0,1-18.21,3.62ZM64.61,187.88a74.14,74.14,0,0,0,13.16,3.39l6.89-17.1,4.57,0a56.63,56.63,0,0,0,21.9-4.35l4.21-1.76,12.91,13.18a73,73,0,0,0,10.85-8.17L130,157l2.87-3.55a55.23,55.23,0,0,0,10.25-19.8l1.24-4.4,18.36-1.88a75.16,75.16,0,0,0,.39-13.58l-18.22-2.92-1-4.47A55.09,55.09,0,0,0,134.84,86l-2.67-3.71,10-15.51q-2.4-2.46-5-4.63c-1.73-1.45-3.53-2.84-5.41-4.15L118.13,70.46l-4.1-2a55.13,55.13,0,0,0-21.61-5.56l-4.57-.24L81.94,45.16a74.2,74.2,0,0,0-13.33,2.65l1.21,18.4-4.13,2A55.64,55.64,0,0,0,47.87,81.58l-3,3.44L27.48,78.74a73.24,73.24,0,0,0-6.25,12.05l15.14,10.54-1,4.45a55.36,55.36,0,0,0-.64,22.31l.78,4.5-15.71,9.66a72.36,72.36,0,0,0,5.53,12.39L43,149.38,45.8,153A54.62,54.62,0,0,0,53.61,161a55.44,55.44,0,0,0,9.25,6.36l4,2.2Z"
            />
            <path d="M89.49,167.62A48.69,48.69,0,0,1,57.86,156a49.11,49.11,0,1,1,35.8,11.44C92.26,167.56,90.87,167.62,89.49,167.62Zm.1-84.77a35.64,35.64,0,1,0,23,8.41A35.6,35.6,0,0,0,89.59,82.85Z" />
          </g>
        </g>
        <g className="translateGear2">
          <g
            className="gear2"
            style={{
              transformOrigin: gearStyleAnimation.gear2,
            }}
          >
            <path
              className="gearColor"
              d="M217.43,421a126.53,126.53,0,0,1-13.88-.79l-4.75-.55-7.32-32.26a96.86,96.86,0,0,1-21-8.53l-28,16.77-3.67-3.05a124.1,124.1,0,0,1-12.23-11.68l-3.15-3.45,14.41-28A96.25,96.25,0,0,1,126.55,328L97,323.26l-.81-4.77a122.86,122.86,0,0,1-1.65-17.74l-.11-4.58,26.3-11a96.86,96.86,0,0,1,5.59-24.88l-17.44-20.11,2.45-4.17a123.25,123.25,0,0,1,11-15.77l2.88-3.5,24.57,7.61A97.16,97.16,0,0,1,170.35,209L170,184.57l4.45-1.66a122.68,122.68,0,0,1,19.68-5.52l4.46-.85L211.71,197a97.62,97.62,0,0,1,24.7,1.72l15.24-18.77,4.41,1.46a123.08,123.08,0,0,1,19.25,8.24l4.08,2.2-3.16,24.85a98,98,0,0,1,16.63,16.12l25.53-4.93,2.47,3.83a123.26,123.26,0,0,1,9.64,18.11l1.86,4.35-20.18,18.68a97.32,97.32,0,0,1,2.31,21.05v.46L340,308.51l-.54,4.49A124,124,0,0,1,335.59,332l-1.33,4.63-30.42,1.49a96.46,96.46,0,0,1-11.46,17.46l11.48,30.05-3.37,3.09a122.78,122.78,0,0,1-14,11.12l-4,2.73-26-19.76a96.14,96.14,0,0,1-20.33,6.38l-11,31.66-5.48.15C218.93,421,218.19,421,217.43,421Zm-7.64-13.73c1.93.14,3.84.22,5.72.25L226,377.14l4-.6a83.54,83.54,0,0,0,24.27-7.63l3.73-1.84,24.75,18.8q2.65-2,5.19-4.12l-11.09-29,2.75-3.06a83.37,83.37,0,0,0,13.76-21l1.71-3.72,28.74-1.39q.92-3.87,1.56-7.79l-24.71-13.74.22-4.18c.06-1.34.1-2.69.1-4a83.67,83.67,0,0,0-2.83-21.58l-1-3.91,19-17.6c-1.29-2.68-2.72-5.35-4.25-8l-24.73,4.77-2.52-3.4a84,84,0,0,0-19.46-18.9L261.87,223l3-23.54c-2.81-1.36-5.72-2.6-8.68-3.72l-14.63,18-4.14-1a84.07,84.07,0,0,0-28.49-2l-4.1.42-12.59-19.56c-2.92.68-5.81,1.49-8.65,2.41l.37,23.19-3.8,1.88a83.39,83.39,0,0,0-23.55,17.53l-2.88,3.06L130,232.27c-1.56,2.07-3.05,4.22-4.47,6.43l16.44,19-1.61,3.86a82.73,82.73,0,0,0-6.39,28.5l-.2,4.25L108.22,305c.13,2.19.33,4.37.59,6.52L136.7,316l1.27,3.91a83.34,83.34,0,0,0,13.12,24.86l2.61,3.38L139.76,375.2c1.33,1.34,2.7,2.66,4.11,3.93L170.5,363.2l3.47,2.11a82.9,82.9,0,0,0,24.67,10l4.12.95Z"
            />
            <path d="M217,359.05a64.83,64.83,0,1,1,64.82-64.81A64.9,64.9,0,0,1,217,359.05Zm0-116.18a51.37,51.37,0,1,0,51.36,51.37A51.43,51.43,0,0,0,217,242.87Z" />
          </g>
        </g>
        <g className="translateGear3">
          <g
            className="gear3"
            style={{
              transformOrigin: gearStyleAnimation.gear3,
              animation: `rotate ${timeRotateMediumGear} linear infinite reverse`,
            }}
          >
            <path
              className="gearColor"
              d="M370.46,229.78a112.18,112.18,0,0,1-18-1.46l-5.2-.86-2.11-26c-.52-.16-1-.31-1.54-.48a88.17,88.17,0,0,1-9.55-3.74l-18.85,18-4.44-2.81A110.71,110.71,0,0,1,291,196.56l-3.7-3.74,13.57-22.25a87,87,0,0,1-6.5-9.94l-25.84,3.51-1.95-4.88A112.23,112.23,0,0,1,260,134.8l-.81-5.21,24-10a88.81,88.81,0,0,1,.59-11.86L260.87,95.36l1.3-5.1c.58-2.3,1.21-4.59,2-6.89a110.62,110.62,0,0,1,7-16.8l2.4-4.7,25.36,6a88.62,88.62,0,0,1,7.45-9.27l-11.3-23.46,4.05-3.36a113,113,0,0,1,21.2-13.88l4.7-2.36,17,19.78a86.34,86.34,0,0,1,11.46-3.13l4.63-25.64,5.25-.34a112,112,0,0,1,25.33,1.23l5.19.86,2.11,26c.52.16,1,.31,1.54.48a87.38,87.38,0,0,1,9.55,3.74l18.85-18,4.46,2.81A111.74,111.74,0,0,1,450.1,39.22L453.8,43,440.24,65.21a86.88,86.88,0,0,1,6.48,9.94l25.85-3.51,1.95,4.88A112.23,112.23,0,0,1,481.15,101l.81,5.21-24,10a87.39,87.39,0,0,1-.58,11.87l22.93,12.32-1.3,5.1c-.58,2.3-1.23,4.59-2,6.89a112.28,112.28,0,0,1-7,16.81l-2.41,4.68-25.36-6a88.16,88.16,0,0,1-7.44,9.26l11.31,23.46L442,204a112.46,112.46,0,0,1-21.2,13.88l-4.71,2.36-17-19.77a88.14,88.14,0,0,1-11.45,3.12L383,229.2l-5.25.34C375.34,229.7,372.89,229.78,370.46,229.78Zm-10.64-14a104,104,0,0,0,11.86.57l4.44-24.56,4.82-.69a74,74,0,0,0,17.66-4.82l4.51-1.84,16.26,18.95a98.67,98.67,0,0,0,9.94-6.51l-10.84-22.48L422,171a73.3,73.3,0,0,0,11.46-14.28l2.56-4.14,24.29,5.77a97.71,97.71,0,0,0,3.91-10.09c.11-.34.21-.68.32-1l-22-11.82.85-4.79a73.24,73.24,0,0,0,.9-18.28l-.36-4.85,23-9.61a99,99,0,0,0-3.11-11.47l-24.76,3.36-2.13-4.36a75.46,75.46,0,0,0-10-15.33l-3.14-3.71,13-21.32a97.75,97.75,0,0,0-9.24-7.45l-18,17.27-4.3-2.27a74.76,74.76,0,0,0-11.81-5c-1.78-.58-3.55-1.05-5.32-1.49L383.33,45l-2-24.9a106.08,106.08,0,0,0-11.86-.58L365,44l-4.81.69a74.23,74.23,0,0,0-17.68,4.82L338,51.38,321.75,32.44a97.91,97.91,0,0,0-9.93,6.5l10.82,22.47-3.49,3.38a73.3,73.3,0,0,0-11.46,14.28l-2.56,4.14-24.29-5.77a102.32,102.32,0,0,0-3.91,10.09c-.11.34-.21.67-.32,1l22,11.82-.83,4.79a73.25,73.25,0,0,0-.92,18.28l.36,4.85-23,9.61a99,99,0,0,0,3.11,11.47L302.07,146l2.13,4.36a74.77,74.77,0,0,0,10,15.33l3.15,3.71-13,21.32a99.15,99.15,0,0,0,9.24,7.46l18-17.28,4.29,2.27a75.67,75.67,0,0,0,11.82,5c1.78.58,3.55,1,5.32,1.49l4.71,1.16Z"
            />
            <path d="M370.58,171.82c-.49,0-1,0-1.48,0a53.92,53.92,0,1,1,1.48,0Zm-.05-94.41A40.47,40.47,0,1,0,411,119h0a40.51,40.51,0,0,0-39.36-41.54C371.28,77.42,370.9,77.41,370.53,77.41Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Gear;
