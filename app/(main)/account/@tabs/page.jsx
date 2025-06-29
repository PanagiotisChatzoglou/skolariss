import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import PersonalDetails from "../component/personal-details";
import ContactInfo from "../component/contact-info";
import ChangePassword from "../component/change-password";
import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";

async function Profile() {
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  return (
    <>
      <PersonalDetails userInfo={loggedInUser} />
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <Label className="mb-2 block">Phone No. :</Label>
                  <Input
                    name="number"
                    id="number"
                    type="number"
                    placeholder="Phone :"
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Website :</Label>
                  <Input name="url" id="url" type="url" placeholder="Url :" />
                </div>
              </div>
              {/*end grid*/}
              <Button className="mt-5" type="submit">
                Add
              </Button>
            </form>
          </div>
          {/*end col*/}
          <div>
            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
            <form>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <Label className="mb-2 block">Old password :</Label>
                  <Input
                    type="password"
                    placeholder="Old password"
                    required=""
                  />
                </div>
                <div>
                  <Label className="mb-2 block">New password :</Label>
                  <Input
                    type="password"
                    placeholder="New password"
                    required=""
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Re-type New password :</Label>
                  <Input
                    type="password"
                    placeholder="Re-type New password"
                    required=""
                  />
                </div>
              </div>
              {/*end grid*/}
              <Button className="mt-5" type="submit">
                Save password
              </Button>
            </form>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </>
  );
}

export default Profile;
