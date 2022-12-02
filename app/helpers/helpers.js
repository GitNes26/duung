export const span_requiered = $(".span_requiered").html(
   `<span class="text-danger fst-italic">&nbsp; * required</span>`
 );

export function iconEye() {

   $(".icon_eye").click((e) => {
      const target = $(e.target);
      target.toggleClass("fa-solid fa-eye fa-duotone fa-eye-slash");
      const input = $(`input#${target.attr('data-input')}`)
      if (target.hasClass("fa-eye")) input.prop("type","text")
      else input.prop("type","password")
   })
}