export type LoginForm = {
  credential: string
  password: string
}

export const LOGIN_FIELDS = [
  {
    name: "credential" as const,
    label: "Telefon raqam yoki pochta",
    placeholder: "Telefon yoki elektron pochta",
    type: "text",
  },
  {
    name: "password" as const,
    label: "Parol",
    placeholder: "Parol kiriting",
    type: "password",
  },
]