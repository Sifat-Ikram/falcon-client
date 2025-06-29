export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p>Contact Us · Careers · Returns</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <p>Shipping · Privacy · Terms</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Download App</h3>
          <p>(App Store / Play Store logos)</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4">
        © 2025 Falcon. All rights reserved.
      </div>
    </footer>
  );
}
