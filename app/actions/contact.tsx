"use server"

import { z } from "zod"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  project: z.string().min(2, "Project type is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    project?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Validate form data
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      project: formData.get("project"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, project, message } = validatedFields.data

    // Send to Formspree
    try {
      const formspreeData = new FormData()
      formspreeData.append("name", name)
      formspreeData.append("email", email)
      formspreeData.append("project", project)
      formspreeData.append("message", message)
      formspreeData.append("_subject", `New Project Inquiry from ${name}`)
      formspreeData.append("_replyto", email)

      const response = await fetch("https://formspree.io/f/mldwokjr", {
        method: "POST",
        body: formspreeData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        return {
          success: true,
          message:
            "🎉 Thank you for your message! I've received your project inquiry and will get back to you within 2-4 hours. For urgent matters, feel free to contact me on Discord!",
        }
      } else {
        const errorData = await response.json()
        console.error("Formspree error:", errorData)
        throw new Error("Formspree submission failed")
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      return {
        success: false,
        message:
          "Sorry, there was an issue sending your message. Please contact me directly on Discord: AyrixMC#0000 or email: ayrixmc@gmail.com",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error processing your message. Please contact me directly on Discord: AyrixMC#0000 or email: ayrixmc@gmail.com",
    }
  }
}
