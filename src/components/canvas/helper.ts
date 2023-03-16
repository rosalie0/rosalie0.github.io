/**
 * Helper function to let us give rotation values like 'degrees' (eg rotate 90 degrees)
 * Give it 180 to convert it to whatever that is in radians
 * @param {*} degrees
 * @returns value in radians
 */
export const degreesToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};
