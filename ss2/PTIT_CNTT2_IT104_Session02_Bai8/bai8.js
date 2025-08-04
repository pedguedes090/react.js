let displayUserInfo=(user)=> {
  const { name, age, location, contact, job } = user;
  const city = location?.city || "unknown";
  const country = location?.country || "unknown";
  const email = contact?.email || "unknown";
  const phone = contact?.phone || "unknown";
  const title = job?.title || "unknown";
  const company = job?.company || "unknown";

  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}
console.log(displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } }))
console.log(displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } }))