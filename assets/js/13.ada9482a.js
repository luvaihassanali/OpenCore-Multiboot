(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{399:function(t,e,a){t.exports=a.p+"assets/img/blessoverride.4c95ffdb.png"},423:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dualbooting-with-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dualbooting-with-linux"}},[t._v("#")]),t._v(" Dualbooting with Linux")]),t._v(" "),s("p",[s("strong",[t._v("WORK IN PROGRESS")])]),t._v(" "),s("h2",{attrs:{id:"method-a-chainloading-a-efi-bootloader-grub2-systemd-boot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-a-chainloading-a-efi-bootloader-grub2-systemd-boot"}},[t._v("#")]),t._v(" Method A: Chainloading a EFI Bootloader (GRUB2, Systemd-boot)")]),t._v(" "),s("h4",{attrs:{id:"method-1-using-blessoverride"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-1-using-blessoverride"}},[t._v("#")]),t._v(" Method 1: Using BlessOverride")]),t._v(" "),s("p",[t._v("If Linux is not picked up automagically, add the following to your config.plist:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Misc -> BlessOverride -> \\EFI\\arch\\grubx64.efi\n")])])]),s("p",[t._v("Some common Linux bootloader paths:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("\\EFI\\arch\\grubx64.efi")])]),t._v(" "),s("li",[s("code",[t._v("\\EFI\\ubuntu\\grubx64.efi")])]),t._v(" "),s("li",[s("code",[t._v("\\EFI\\systemd\\systemd\\systemd-bootx64.efi")])]),t._v(" "),s("li",[t._v("Check your distribution ¯\\_(ツ)_/¯")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(399),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"method-2-using-efibootmgr-recommended"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-2-using-efibootmgr-recommended"}},[t._v("#")]),t._v(" Method 2: Using "),s("code",[t._v("efibootmgr")]),t._v(" (recommended)")]),t._v(" "),s("p",[s("code",[t._v("efibootmgr")]),t._v(" is a program that manipulates the EFI Boot Manager in your UEFI Firmware (ex-BIOS). With it, you can create new entries and add your linux boot manager (GRUB2, systemd-boot,...) in a way that will make it appear on OpenCore and can be selected and set as default too by OC (using Ctrl + Enter when you highlight it). To do that:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Know which bootloader/manager you're using (GRUB2 or systemd-boot or anything else)")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Boot to linux through OpenCore, you may want to use UEFI Shell to execute the EFI Application for your bootloader/manager")])])]),t._v(" "),s("li",[s("p",[t._v("Find out your bootloader/manager's path, usually it's in the EFI (if you properly set it up)")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In a terminal window on your linux install, run "),s("code",[t._v("lsblk")]),t._v(" (available in most distributions)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ lsblk\nNAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \nsda            "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":0    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("223")]),t._v(".6G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" disk \n├─sda1         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":1    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   200M  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part /boot/efi\n├─sda2         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":2    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("116")]),t._v(".3G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part \n└─sda3         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":3    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   107G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part /\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("ul",[s("li",[t._v("Check for the mount point section to get your system root "),s("code",[t._v("/")]),t._v(" partition (here "),s("code",[t._v("sda3")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("/boot/efi")]),t._v(" has my EFI partition mounted in it (if you properly added it in fstab, which you should)")]),t._v(" "),s("li",[t._v("the bootloader/manager is in "),s("code",[t._v("/boot/efi")])]),t._v(" "),s("li",[s("code",[t._v("/boot/efi")]),t._v(" partition number is "),s("code",[t._v("1")]),t._v(" in this case (it could be "),s("code",[t._v("sda1")]),t._v(" or "),s("code",[t._v("nvme0nXp1")]),t._v(" or anything else), if you have your efi in another partition please remember which number it is")])])]),t._v(" "),s("li",[s("p",[t._v("Change the directory to where your EFI partition is mounted by running "),s("code",[t._v("cd /path/to/efi")]),t._v(" (for example "),s("code",[t._v("cd /boot/efi")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("Once you're in, you'll usually find a folder named "),s("code",[t._v("EFI")]),t._v(" which contains "),s("code",[t._v("BOOT")]),t._v(" and other folders, one of these folders "),s("em",[t._v("may")]),t._v(" contain your bootloader/manager EFI Application binary, commonly found in")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EFI/arch/grubx64.efi")]),t._v(" - for Arch with grub2")]),t._v(" "),s("li",[s("code",[t._v("EFI/ubuntu/grubx64.efi")]),t._v(" - for Ubuntu with grub2")]),t._v(" "),s("li",[s("code",[t._v("EFI/systemd/systemd-bootx64.efi")]),t._v(" - for systemd-boot (path used with Arch)")]),t._v(" "),s("li",[s("code",[t._v("EFI/fedora/grubx64.efi")]),t._v(" - for Fedora with grub2")]),t._v(" "),s("li",[t._v("or run "),s("code",[t._v('find . -iname "grubx64.efi"')]),t._v(" or "),s("code",[t._v('find . -iname "systemd-bootx64.efi"')]),t._v(" in your EFI folder (you can change the file name to whatever you're using)")])])]),t._v(" "),s("li",[s("p",[t._v("Keep note of:")]),t._v(" "),s("ul",[s("li",[t._v("the binary path")]),t._v(" "),s("li",[t._v("the binary's partition number")]),t._v(" "),s("li",[t._v("the binary's disk path ("),s("code",[t._v("/dev/sda")]),t._v(" or "),s("code",[t._v("/dev/nvme0nX")]),t._v(")")])])])])]),t._v(" "),s("li",[s("p",[t._v("Install "),s("code",[t._v("efibootmgr")]),t._v(" in your linux system (usually it comes built-in in ubuntu, but requires install on arch for example)")])]),t._v(" "),s("li",[s("p",[t._v("Once installed, run as "),s("strong",[t._v("sudoer/superuser")]),t._v(" (or use sudo)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('efibootmgr -c -L "Linux" -l "\\EFI\\pathto\\filex64.efi" -d "/dev/sda" -p 1\n')])])]),s("ul",[s("li",[s("code",[t._v("-c")]),t._v(": Create")]),t._v(" "),s("li",[s("code",[t._v('-L "Linux"')]),t._v(": Label the boot entry (you can change it to whatever you want)")]),t._v(" "),s("li",[s("code",[t._v('-l "\\EFI\\pathto\\filex64.efi"')]),t._v(": loader file path, must be in a format the UEFI Firmware can use, which means "),s("code",[t._v("\\")]),t._v(" for pathing instead of "),s("code",[t._v("/")]),t._v(" you find in unix")]),t._v(" "),s("li",[s("code",[t._v('-d "/dev/sda"')]),t._v(": disk path so that "),s("code",[t._v("efibootmgr")]),t._v(" know which disk the UEFI firmware should read the file from, it can be "),s("code",[t._v("/dev/nvme0nX")]),t._v(" (with X as a number) if you're using nvme")]),t._v(" "),s("li",[s("code",[t._v("-p 1")]),t._v(": point the partition number we found earlier, in case your EFI partition is the first one, this can be omitted")])])]),t._v(" "),s("li",[s("p",[t._v("Reboot and check OpenCore, "),s("strong",[t._v("you will find a new entry named "),s("code",[t._v("EFI")])]),t._v(", there can me many as it can also point to other boot entries, that's by design by OpenCore, not a bug.")])])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("p",[t._v("This can be used for "),s("strong",[t._v("any EFI application")]),t._v(" you want to add to the UEFI Boot Manager.")]),t._v(" "),s("h2",{attrs:{id:"method-b-chainloading-the-kernel-must-support-efistub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#method-b-chainloading-the-kernel-must-support-efistub"}},[t._v("#")]),t._v(" Method B: Chainloading the kernel (must support EFISTUB)")]),t._v(" "),s("p",[t._v("Some linux kernels are built with EFISTUB enabled in their configuration, which makes them loadable by the UEFI firmware like a regular UEFI application (neat, right?), we can use this feature with OpenCore and let it load the kernel as an EFI application while also passing boot arguments and other information.")]),t._v(" "),s("h3",{attrs:{id:"_1-identifying-your-root-partition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-identifying-your-root-partition"}},[t._v("#")]),t._v(" 1. Identifying your root partition")]),t._v(" "),s("p",[t._v("We first need to determine your root partition and its UUID/PARTUUID, this information will help us point to the proper partition for the kernel/system root.")]),t._v(" "),s("h4",{attrs:{id:"_1-your-kernel-and-system-root-are-in-the-same-partition-using-arch-in-this-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-your-kernel-and-system-root-are-in-the-same-partition-using-arch-in-this-example"}},[t._v("#")]),t._v(" 1. Your kernel and system root are in the same partition: (using Arch in this example)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In a terminal window on your linux install, run "),s("code",[t._v("lsblk")]),t._v(" (available in most distributions)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ lsblk\nNAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \nsda            "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":0    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("223")]),t._v(".6G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" disk \n├─sda1         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":1    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   200M  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part /boot/efi\n├─sda2         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":2    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("116")]),t._v(".3G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part \n└─sda3         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":3    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   107G  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" part /\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("ul",[s("li",[t._v("Check for the mount point section to get your system root "),s("code",[t._v("/")]),t._v(" partition (here "),s("code",[t._v("sda3")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("/boot/efi")]),t._v(" has my EFI partition mounted in it (if you properly added it in fstab, which you should)")]),t._v(" "),s("li",[t._v("the kernel and initramfs are stored in "),s("code",[t._v("/boot")]),t._v(" which is part of my main system root partition")])])]),t._v(" "),s("li",[s("p",[t._v("Now we need to know which UUID/PARTUUID, run "),s("code",[t._v("blkid | grep -i <system_root_partition>")]),t._v(" , eg: "),s("code",[t._v("blkid | grep -i sda3")]),t._v(" (must be root user)")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# blkid | grep -i sda3")]),t._v("\n/dev/sda3: "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UUID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3d4768d7-d33e-4f9f-a821-e80eba22ca62"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BLOCK_SIZE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4096"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext4"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PARTUUID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a1073e53-c768-4ce5-89ad-b558669bdb89"')]),t._v("\n")])])]),s("ul",[s("li",[t._v("You'll get both your UUID/PARTUUID, save these somewhere.")])])]),t._v(" "),s("li",[s("p",[t._v("Explore "),s("code",[t._v("/boot")]),t._v(" and list your files, you should find your kernel and initramfs")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /boot\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51698")]),t._v("\ndrwxr-xr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" root root    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34304")]),t._v(" Jan  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1970")]),t._v(" efi\ndrwxr-xr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" root root     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" Sep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(":42 grub\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10144696")]),t._v(" Sep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(":31 initramfs-linux.img\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32047033")]),t._v(" Sep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(":32 initramfs-linux-fallback.img\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3161088")]),t._v(" Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":50 intel-ucode.img\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7541344")]),t._v(" Sep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(":31 vmlinuz-linux\n")])])]),s("ul",[s("li",[t._v("You see my kernel is named "),s("code",[t._v("vmlinuz-linux")]),t._v(" with "),s("code",[t._v("initramfs-linux.img")]),t._v(" as its initramfs, with a fallback img, but also "),s("code",[t._v("intel-ucode.img")]),t._v(" for the trash intel mitigation\n"),s("ul",[s("li",[t._v("In case you're using AMD, you might also find "),s("code",[t._v("amd-ucode.img")])]),t._v(" "),s("li",[t._v("Some other distributions may have these images stored somewhere else, check your distribution and how it handles CPU ucode firmware")])])])])]),t._v(" "),s("li",[s("p",[t._v("Reboot to OpenCore, and press Space, it should show more options, one of them should be OpenShell.efi. In case you do not have it, download the OpenCore zip, and take it from OC/Tools, and add it to your config.plist, ProperTree can do that with OC Snapshot.")])])]),t._v(" "),s("h4",{attrs:{id:"_2-your-kernel-is-in-your-efi-partition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-your-kernel-is-in-your-efi-partition"}},[t._v("#")]),t._v(" 2. Your kernel is in your EFI partition:")]),t._v(" "),s("p",[t._v("In case you're using systemd-boot, make sure you install the kernel in your EFI partition where systemd UEFI bootloader can detect and load your kernel: basically make sure it's in a FAT32 partition "),s("em",[t._v("which you EFI partition should already be")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"_2-identifying-your-uefi-paths-and-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-identifying-your-uefi-paths-and-devices"}},[t._v("#")]),t._v(" 2. Identifying your UEFI paths and devices:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In the shell")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("run "),s("code",[t._v("map -r -b")]),t._v(" to list all your devices (-b to break the scroll)")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("BLKX:")]),t._v(" are all the partitions/disks scanned")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("FSX:")]),t._v(" are all the "),s("strong",[t._v("explorable")]),t._v(" filesystems")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("PciRoot(0x0)/Pci(AxB,CxD)/Sata")]),t._v(" or "),s("code",[t._v("Nvme")]),t._v(" are your drives types (nvme or ahci)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("HD(X,GPT,<PARTUUID>,...)")]),t._v(" or "),s("code",[t._v("HD(X,MBR)")]),t._v(" are your drive partitions where "),s("code",[t._v("X")]),t._v(" is a number, GPT/MBR the disk partition scheme then followed with PARTUUID")])]),t._v(" "),s("li",[s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Mapping table\n      FS0: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a1:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK1:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(",GPT,4C86153F-3A91-4328-878A-807A8FA944A1,0x28,0x64000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS1: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK3:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,1D89CBABD1BB094B87762CDCDC3168F6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS2: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK4:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,43B537EA89133A48A9640D5A373D2982"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS4: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK6:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,9FEEB42E4604B44BB4CB39A9D6F41DB8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS5: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK7:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,EDB22B3A8A95AC4B9A66E4E287559689"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS6: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK8:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,FA8B4C241BA35347B093F2E560B563EA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      FS3: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":HD0a0a2:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("BLK5:\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/VenMedia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BE74FCF7-0B7C-49F3-9147-01F4042E6842,93DFEA9BE3D44D4CBE5A8A4F978348D2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     BLK0: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     BLK2: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",GPT,B186A074-AE41-495C-BAF3-04AD655A73FB,0x64028,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     BLK9: Alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n          PciRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Pci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x1F,0x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Sata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x0,0x0,0x0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/HD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(",GPT,A1073E53-C768-4CE5-89AD-B558669BDB89,0xE914CB8,0xE8B0C90"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("BLK0")]),t._v(" seems to be the disk BLK as its path does not show any partition numbering or UUID\n"),s("ul",[s("li",[t._v("This is logical as the first thing your firmware will look for is the disk, not its partitions")])])]),t._v(" "),s("li",[t._v("I have BLK1/BLK2/BLK9 which are my 3 main partitions\n"),s("ul",[s("li",[t._v("Because I have APFS driver loaded from OpenCore, there are new BLK devices shown because of that and thus added more partitions, which are actually just APFS container partitions, those can be ignored")]),t._v(" "),s("li",[t._v("The reason why they can be ignored is because you can see that they have the same PARTUUID, also we're not here for those partitions")])])]),t._v(" "),s("li",[t._v("FS0 seems to be BLK1, which is my EFI partition which is also FAT32 formatted, where OC lives\n"),s("ul",[s("li",[t._v("In a multi-disk setup, FS0: can be whatever the UEFI firmware detects first, it does not mean that OC is always in FS0, in these cases FS0: could point to a USB device or SATA device. Usually most firmware will follow this setup to read/find partitions: USB > SATA > NVME, this is not a norm as some other firmware could do something else (it can also depend on the boot order setting).")]),t._v(" "),s("li",[t._v("Check if your linux kernel is there (in case of systemdboot)\n"),s("ul",[s("li",[s("code",[t._v("cd FSX:")])]),t._v(" "),s("li",[s("code",[t._v("ls")])]),t._v(" "),s("li",[t._v("Use your eyes and a brain cell")])])]),t._v(" "),s("li",[t._v("Just make sure you're properly reading the partition location before doing any actions")])])]),t._v(" "),s("li",[t._v("FS0/BLK2/BLK9 all live in a Sata drive (which is my main boot drive for this example device)\n"),s("ul",[s("li",[t._v("This matches linux reading the device as "),s("code",[t._v("sdX")]),t._v(" and not "),s("code",[t._v("nvmeXnX")])]),t._v(" "),s("li",[t._v("In case of an nvme drive, you would be seeing "),s("code",[t._v("Nvme")]),t._v(" instead of "),s("code",[t._v("Sata")])])])]),t._v(" "),s("li",[t._v("BLK9's PARTUUID matches my root filesystem "),s("code",[t._v("a1073e53-c768-4ce5-89ad-b558669bdb89")]),t._v(" "),s("ul",[s("li",[t._v("But remember that it's in capital letters!")])])]),t._v(" "),s("li",[t._v("BLK1 and BLK2 have their explorable "),s("code",[t._v("FSX")]),t._v(", which means the UEFI firmware can explore and read files from them, however BLK9 which is an ext4 partition isn't, this means the UEFI requires a suitable driver to load its contents.")])])])])]),t._v(" "),s("li",[s("p",[t._v("Identify your EFI partition (in this example it's FS0:)")]),t._v(" "),s("ul",[s("li",[t._v("run "),s("code",[t._v("map -r > FSX:\\drives_map.txt")]),t._v(" "),s("ul",[s("li",[t._v("This will run "),s("code",[t._v("map")]),t._v(" and save the output to FSX: in a file named "),s("code",[t._v("drives_map.txt")])]),t._v(" "),s("li",[t._v("Note that UEFI Firmware use Windows-style path slash "),s("code",[t._v("\\")]),t._v(" not "),s("code",[t._v("/")])])])])])])])]),t._v(" "),s("li",[s("p",[t._v("Reboot to macOS/Linux distribution with ProperTree in it")])])]),t._v(" "),s("h3",{attrs:{id:"_3-adding-the-boot-entry-to-opencore-s-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-adding-the-boot-entry-to-opencore-s-configuration-file"}},[t._v("#")]),t._v(" 3. Adding the boot entry to OpenCore's configuration file")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In case:")]),t._v(" "),s("ul",[s("li",[t._v("Your kernel is in the system partition:\n"),s("ul",[s("li",[t._v("Download a suitable UEFI driver for your filesystem in use:\n"),s("ul",[s("li",[t._v("Download "),s("a",{attrs:{href:"https://sourceforge.net/projects/refind/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rEFInd"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[t._v("Extract the zip")]),t._v(" "),s("li",[t._v("Explore the extracted zip > refind > drivers_x64")]),t._v(" "),s("li",[t._v("You'll find these drivers:\n"),s("ul",[s("li",[t._v("ext4")]),t._v(" "),s("li",[t._v("ext2")]),t._v(" "),s("li",[t._v("btrfs")])])]),t._v(" "),s("li",[t._v("Pick the UEFI driver that you want and copy it to OC > Drivers")]),t._v(" "),s("li",[t._v("Add it to your config.plist (you can use ProperTree > File > OC Snapshot)")])])])])])])]),t._v(" "),s("li",[t._v("Your kernel is in your EFI partition (systemdboot), you don't need to set up any fs drivers")])])]),t._v(" "),s("li",[s("p",[t._v("(Optional) In case you're using GRUB2, make sure you get a copy of "),s("code",[t._v("grub.cfg")]),t._v(" to get your kernel arguments")])]),t._v(" "),s("li",[s("p",[t._v("Open config.plist in your plist editor (recommend ProperTree), under Misc > Entries, make a new child with type "),s("code",[t._v("Dictionary")]),t._v(":")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Notes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Comment")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Whatever you want to write here, it's just a comment I guess lol")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("Enabled")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",[t._v("True")]),t._v("/"),s("code",[t._v("ON")]),t._v("/"),s("code",[t._v("1")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Name of the OS you want")]),t._v(" "),s("td",[t._v("Can be anything you want")])]),t._v(" "),s("tr",[s("td",[t._v("Path")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("strong",[t._v("Template:")]),s("br"),t._v("PciRoot("),s("strong",[t._v("your_ids")]),t._v(")/Pci("),s("strong",[t._v("your_ids")]),t._v(")/.../"),s("strong",[t._v("Type")]),t._v("("),s("strong",[t._v("your_ids")]),t._v(")/HD("),s("strong",[t._v("X")]),t._v(","),s("strong",[t._v("SCH")]),t._v(","),s("strong",[t._v("PARTUUID")]),t._v(","),s("strong",[t._v("stuff,from_map")]),t._v(")/\\"),s("em",[t._v("path")]),t._v("\\"),s("em",[t._v("to")]),t._v("\\"),s("em",[t._v("kernel")]),s("br"),s("strong",[t._v("Example:")]),s("br"),t._v("PciRoot("),s("strong",[t._v("0x0")]),t._v(")/Pci("),s("strong",[t._v("0x1D,0x0")]),t._v(")/Pci("),s("strong",[t._v("0x0,0x0")]),t._v(")/"),s("strong",[t._v("NVMe")]),t._v("("),s("strong",[t._v("0x1,9B-64-50-F1-5C-38-25-00")]),t._v(")/HD("),s("strong",[t._v("6")]),t._v(","),s("strong",[t._v("GPT")]),t._v(","),s("strong",[t._v("608DA4F8-DA9E-4792-829F-A4CF4E5B8B82")]),t._v(","),s("strong",[t._v("0x2C431800")]),t._v(","),s("strong",[t._v("0x3B10800")]),t._v(")/"),s("em",[t._v("\\boot\\vmlinuz-linux")])]),t._v(" "),s("td",[s("em",[t._v("check below")])])]),t._v(" "),s("tr",[s("td",[t._v("Arguments")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("strong",[t._v("Template:")]),s("br"),t._v("initrd=\\path\\to\\rd.img\\if\\used "),s("em",[t._v("other_kernel_arguments")]),s("br"),s("strong",[t._v("Example:")]),s("br"),t._v("initrd=\\boot\\intel_ucode.img initrd=\\boot\\initramfs-linux.img root=PARTUUID=608da4f8-da9e-4792-829f-a4cf4e5b8b82 ro quiet intel_iommu=on iommu=pt")]),t._v(" "),s("td",[s("em",[t._v("check below")])])]),t._v(" "),s("tr",[s("td",[t._v("Auxiliary")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",[t._v("False")]),t._v("/"),s("code",[t._v("NO")]),t._v("/"),s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("- False: Always shown"),s("br"),t._v("- True: Hidden until you press space"),s("br"),t._v("- Requires Misc\\Boot\\HideAuxiliary=True if this is set to True")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Path Notes:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("your_ids")]),t._v(": from the map text file")]),t._v(" "),s("li",[s("strong",[t._v("Type")]),t._v(": NVMe/SATA")]),t._v(" "),s("li",[s("strong",[t._v("X")]),t._v(": partition number")]),t._v(" "),s("li",[s("strong",[t._v("SCH")]),t._v(": disk scheme (GPT/MBR)")]),t._v(" "),s("li",[s("strong",[t._v("PARTUUID")])]),t._v(" "),s("li",[s("strong",[t._v("stuff,from_map")]),t._v(": get them from the map")]),t._v(" "),s("li",[s("em",[t._v("\\path\\to\\kernel")]),t._v(": it's the path to the kernel binary")]),t._v(" "),s("li",[s("strong",[t._v("TL;DR: Copy the path of the partition from the map text file.")]),t._v(" "),s("ul",[s("li",[t._v("Note1: use backslash "),s("code",[t._v("\\")]),t._v(" for "),s("em",[t._v("kernel path")]),t._v(", that's how UEFI firmware handles file paths")]),t._v(" "),s("li",[t._v("Note2: use regular slash "),s("code",[t._v("/")]),t._v(" for the "),s("em",[t._v("PciRoot path")]),t._v(", like shown in the example and template")])])])])]),t._v(" "),s("li",[s("strong",[t._v("Arguments Notes:")]),t._v(" "),s("ul",[s("li",[t._v("You can add as much "),s("code",[t._v("initrd=")]),t._v(" as you want (if you're using linux, you should know why and how)")]),t._v(" "),s("li",[t._v("Your other arguments are the same as in any other bootloader, you can add/remove/modify in the config directly")])])])])]),t._v(" "),s("li",[s("p",[t._v("Notes")]),t._v(" "),s("ul",[s("li",[t._v("You can use the same scheme as above to add other efi files or uefi-loadable files (like systemdboot efi, Windows bootmgfw.efi...)")]),t._v(" "),s("li",[s("strong",[t._v("You will NOT be able to set it as the default boot option with Ctrl+Enter")]),t._v(", so you'll have to select it each time you want to boot it")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);