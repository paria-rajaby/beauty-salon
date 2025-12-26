const alert = (icon, text, confirmButtonText) => {
  return Swal.fire({
    text: text,
    confirmButtonText: confirmButtonText,
    icon: icon,
  });
};

export { alert };
