import React, { type FC } from 'react'

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className="w-full bg-white text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="/adaptive-logo.svg" alt="Arbol logo" className="h-8 mr-2"/>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="tel:+18445457260" className="hover:underline text-center sm:text-left">
              (844) 545-7260
            </a>
            <a href="mailto:hello-insurance@arbol.io" className="hover:underline text-center sm:text-left">
              hello-insurance@arbol.io
            </a>
          </div>
        </div>
        <div
          className="mt-4 flex flex-col sm:flex-row justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
          <a href="#" className="hover:underline text-center sm:text-left">
            Lloyd's CCPA Privacy Policy
          </a>
          <a href="#" className="hover:underline text-center sm:text-left">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-center sm:text-left">
            Legal
          </a>
          <a href="#" className="hover:underline text-center sm:text-left">
            License Information
          </a>
        </div>
      </div>
    </footer>
  )
}
